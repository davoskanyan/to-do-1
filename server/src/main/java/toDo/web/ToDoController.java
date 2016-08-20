package toDo.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

	@RequestMapping(value = "/getListItems", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void lists(HttpServletResponse response)
			throws IOException {

		List<ListItem> lists = toDoRepository.getListItems();
		String listsJson = ToDoHelper.listsToJson(lists);
		response.getWriter().write(listsJson);
	}

	@RequestMapping(value = "/getTaskItems/{listId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public void getTasks(@PathVariable("listId") int listId, HttpServletResponse response)
			throws IOException {

		List<TaskItem> tasks = toDoRepository.getTaskItems(listId);
		String tasksJson = ToDoHelper.tasksToJson(tasks);
		response.getWriter().write(tasksJson);
	}

	@RequestMapping(value = "/saveEditListItem", method = RequestMethod.POST)
	public void saveList(@RequestBody ListItem listItem, HttpServletResponse response)
			throws IOException {

		if (listItem.getId() == null) {
			int newId = this.toDoRepository.saveListItem(listItem);
			response.getWriter().write(Integer.toString(newId));
		}
		else {
			this.toDoRepository.editListItem(listItem);

		}
	}

	@RequestMapping(value = "/saveEditTaskItem", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void saveEditTaskItem(@RequestBody TaskItem taskItem, HttpServletResponse response)
			throws IOException {

		if (taskItem.getId() == null) {
			int newId = this.toDoRepository.saveTaskItem(taskItem);
			response.getWriter().write(Integer.toString(newId));
		}
		else {
			this.toDoRepository.editTaskItem(taskItem);
		}
	}

	@RequestMapping(value = "/deleteListItem/{listItemId}", method = RequestMethod.DELETE)
	public void deleteListItem(@PathVariable("listItemId") int listItemId, HttpServletResponse response)
			throws IOException {
		this.toDoRepository.deleteListItem(listItemId);
	}

	@RequestMapping(value = "/deleteTaskItem/{listItemId}/{taskItemId}", method = RequestMethod.DELETE)
	public void deleteTaskItem(@PathVariable("taskItemId") int taskItemId, @PathVariable("listItemId") int listItemId,
			HttpServletResponse response)
			throws IOException {
		this.toDoRepository.deleteTaskItem(listItemId, taskItemId);
	}
}
