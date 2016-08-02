package toDo.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
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

	@RequestMapping(value = "/tasks/{listId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void tasks(@PathVariable("listId") int listId, HttpServletResponse response)
			throws IOException {

		List<TaskItem> tasks = toDoRepository.getTasks(listId);
		String tasksJson = ToDoHelper.tasksToJson(tasks);
		response.getWriter().write(tasksJson);
	}


}
