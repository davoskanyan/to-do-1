package toDo.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import toDo.ListItem;
import toDo.TaskItem;

import javax.sql.DataSource;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
@Repository
public class ToDoRepository {

	@Autowired
	private JdbcOperations jdbcOperations;

	private List<ListItem> listItems = new ArrayList<>();
	private Map<Integer, List<TaskItem>> taskItems = new HashMap<>();

	public ToDoRepository() {
		this.listItems.add(new ListItem(0, "Works"));
		this.listItems.add(new ListItem(1, "Lessons"));
		this.listItems.add(new ListItem(2, "Books"));
		this.listItems.add(new ListItem(3, "Movies"));

		List<TaskItem> taskItems0 = new ArrayList<>();
		taskItems0.add(new TaskItem(0, 0, "Typescript", false));
		taskItems0.add(new TaskItem(1, 0, "Angular", true));
		taskItems0.add(new TaskItem(2, 0, "MDL", false));
		taskItems0.add(new TaskItem(3, 0, "Collections", true));
		this.taskItems.put(0, taskItems0);

		List<TaskItem> taskItems1 = new ArrayList<>();
		taskItems1.add(new TaskItem(0, 1, "Discrete Math", true));
		taskItems1.add(new TaskItem(1, 1, "Functional Programming", true));
		this.taskItems.put(1, taskItems1);

		List<TaskItem> taskItems2 = new ArrayList<>();
		this.taskItems.put(2, taskItems2);

		List<TaskItem> taskItems3 = new ArrayList<>();
		taskItems3.add(new TaskItem(0, 3, "Everest", true));
		taskItems3.add(new TaskItem(1, 3, "Pawn Sacrifice", false));
		this.taskItems.put(3, taskItems3);
	}

	public List<ListItem> getListItems() {
		jdbcOperations.update("INSERT INTO ListItem (Id, UserId, Name) " +
				"VALUES(16, 1, 'added2')");
		return this.listItems;
	}

	public List<TaskItem> getTaskItems(int listId) {
		return taskItems.get(listId);
	}

	public void editTaskItem(TaskItem changedTaskItem) {
		List<TaskItem> taskItems = this.taskItems.get(changedTaskItem.getListItemId());
		for (TaskItem taskItem : taskItems) {
			if (taskItem.getId().equals(changedTaskItem.getId())) {
				taskItem.setCompleted(changedTaskItem.isCompleted());
				taskItem.setName(changedTaskItem.getName());
				break;
			}
		}
	}

	public int saveTaskItem(TaskItem newTaskItem) {
		int newTaskItemId = getNextTaskItemId(newTaskItem.getListItemId());
		newTaskItem.setId(newTaskItemId);
		this.taskItems.get(newTaskItem.getListItemId()).add(newTaskItem);
		return newTaskItemId;
	}

	public void editListItem(ListItem changedListItem) {
		for (ListItem listItem : listItems) {
			if (listItem.getId().equals(changedListItem.getId())) {
				listItem.setName(changedListItem.getName());
			}
		}
	}

	public int saveListItem(ListItem newListItem) {
		int newListItemId = getNextListItemId();
		newListItem.setId(newListItemId);
		this.listItems.add(newListItem);
		this.taskItems.put(newListItemId, new ArrayList<>());
		return newListItemId;
	}

	public void deleteListItem(final int listItemId) {
		this.listItems.removeIf((listItem) -> listItem.getId().equals(listItemId));
		this.taskItems.remove(listItemId);
	}

	public void deleteTaskItem(final int listItemId, final int taskItemId) {
		this.taskItems.get(listItemId).removeIf((t) -> t.getId().equals(taskItemId));
	}

	private int getNextTaskItemId(int listItemId) {
		int maxId = 0;
		for (TaskItem taskItem : taskItems.get(listItemId)) {
			if (taskItem.getId() > maxId) {
				maxId = taskItem.getId();
			}
		}
		return ++maxId;
	}

	private int getNextListItemId() {
		int maxId = 0;
		for (ListItem listItem : listItems) {
			if (listItem.getId() > maxId) {
				maxId = listItem.getId();
			}
		}
		return ++maxId;
	}
}
