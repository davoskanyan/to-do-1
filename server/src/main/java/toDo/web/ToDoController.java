package toDo.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import toDo.ListItem;
import toDo.TaskItem;
import toDo.data.ToDoRepository;
import toDo.util.ToDoHelper;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
@Controller
public class ToDoController {

	@Autowired
	private ToDoRepository toDoRepository;

	@RequestMapping(value = "/lists", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void lists(HttpServletResponse response)
			throws IOException {

		List<ListItem> lists = new ToDoRepository().getLists();
		String listsJson = ToDoHelper.listsToJson(lists);
		response.getWriter().write(listsJson);
	}

	@RequestMapping(value = "/saveList", method = RequestMethod.POST)
	public void saveList(HttpServletRequest request)
			throws IOException {
		String data = getBody(request);
	}

	@RequestMapping(value = "/saveEditTaskItem", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveTaskItem(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		String requestBody = getBody(request);

		int listItemId = JsonPath.read(requestBody, "$.listItemId");

		Integer taskItemId = JsonPath.read(requestBody, "$.taskItem.id");
		String taskItemName = JsonPath.read(requestBody, "$.taskItem.name");
		boolean taskItemCompleted = JsonPath.read(requestBody, "$.taskItem.completed");

		if (taskItemId != null) {
			this.toDoRepository.editTaskItem(taskItemId, listItemId, taskItemName, taskItemCompleted);
		}
		else {
			int newId = this.toDoRepository.saveTaskItem(listItemId, taskItemName);
			response.getWriter().write(Integer.toString(newId));
		}
	}

	@RequestMapping(value = "/tasks/{listId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void tasks(@PathVariable("listId") int listId, HttpServletResponse response)
			throws IOException {

		List<TaskItem> tasks = toDoRepository.getTasks(listId);
		String tasksJson = ToDoHelper.tasksToJson(tasks);
		response.getWriter().write(tasksJson);
	}

	public static String getBody(HttpServletRequest request)
			throws IOException {

		String body = null;
		StringBuilder stringBuilder = new StringBuilder();
		BufferedReader bufferedReader = null;

		try {
			InputStream inputStream = request.getInputStream();
			if (inputStream != null) {
				bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
				char[] charBuffer = new char[128];
				int bytesRead = -1;
				while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
					stringBuilder.append(charBuffer, 0, bytesRead);
				}
			}
			else {
				stringBuilder.append("");
			}
		}
		finally {
			if (bufferedReader != null) {
				bufferedReader.close();
			}
		}
		body = stringBuilder.toString();
		return body;
	}
}
