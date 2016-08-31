package toDo.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import toDo.ListItem;
import toDo.TaskItem;
import toDo.data.DAO.ListItemDAO;
import toDo.data.DAO.TaskItemDAO;

import java.util.List;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
@Repository
public class ToDoRepository {

	@Autowired
	private ListItemDAO listItemDAO;

	@Autowired
	private TaskItemDAO taskItemDAO;

	public List<ListItem> getListItems() {
		return listItemDAO.getListItems();
	}

	public List<TaskItem> getTaskItems(int listItemId) {
		return taskItemDAO.getTaskItems(listItemId);
	}

	public void editTaskItem(TaskItem changedTaskItem) {
		taskItemDAO.editTaskItem(changedTaskItem);
	}

	public int saveTaskItem(TaskItem newTaskItem) {
		return taskItemDAO.saveTaskItem(newTaskItem);
	}

	public void editListItem(ListItem changedListItem) {
		listItemDAO.editListItem(changedListItem);
	}

	public int saveListItem(ListItem newListItem) {
		return listItemDAO.saveListItem(newListItem);
	}

	public void deleteListItem(final int listItemId) {
		listItemDAO.deleteListItem(listItemId);
	}

	public void deleteTaskItem(final int listItemId, final int taskItemId) {
		taskItemDAO.deleteTaskItem(listItemId, taskItemId);
	}
}
