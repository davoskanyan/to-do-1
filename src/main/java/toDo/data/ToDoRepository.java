package toDo.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import toDo.ListItem;
import toDo.TaskItem;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
@Repository
public class ToDoRepository {
	private List<ListItem> listItems = new ArrayList<ListItem>();
	private Map<Integer, List<TaskItem>> taskItems = new HashMap<Integer, List<TaskItem>>();

	public ToDoRepository() {
		this.listItems.add(new ListItem(0, "Works"));
		this.listItems.add(new ListItem(1, "Lessons"));
		this.listItems.add(new ListItem(2, "Books"));
		this.listItems.add(new ListItem(3, "Movies"));

		List<TaskItem> taskItems0 = new ArrayList<TaskItem>();
		taskItems0.add(new TaskItem(0, 0, "Typescript", false));
		taskItems0.add(new TaskItem(0, 1, "Angular", true));
		taskItems0.add(new TaskItem(0, 2, "MDL", false));
		taskItems0.add(new TaskItem(0, 3, "Collections", true));
		this.taskItems.put(0, taskItems0);

		List<TaskItem> taskItems1 = new ArrayList<TaskItem>();
		taskItems1.add(new TaskItem(1, 0, "Discrete Math", true));
		taskItems1.add(new TaskItem(1, 1, "Functional Programming", true));
		this.taskItems.put(1, taskItems1);

		List<TaskItem> taskItems2 = new ArrayList<TaskItem>();
		this.taskItems.put(2, taskItems2);

		List<TaskItem> taskItems3 = new ArrayList<TaskItem>();
		taskItems3.add(new TaskItem(3, 0, "Everest", true));
		taskItems3.add(new TaskItem(3, 1, "Pawn Sacrifice", false));
		this.taskItems.put(3, taskItems3);
	}

	public List<ListItem> getLists() {
		return this.listItems;
	}

	public List<TaskItem> getTasks(int listId) {
		return taskItems.get(listId);
	}
}
