package toDo;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
public class TaskItem {

	private int id;
	private int listId;
	private String name;
	private boolean completed;

	public TaskItem(int id, int listId, String name, boolean completed) {
		this.id = id;
		this.listId = listId;
		this.name = name;
		this.completed = completed;
	}

	public int getId() {
		return id;
	}

	public int getListId() {
		return listId;
	}

	public String getName() {
		return name;
	}

	public boolean isCompleted() {
		return completed;
	}
}
