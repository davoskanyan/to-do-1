package toDo;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
public class TaskItem {

	private Integer id;
	private int listItemId;
	private String name;
	private boolean completed;

	public TaskItem() {
	}

	public TaskItem(Integer id, int listItemId, String name, boolean completed) {
		this.id = id;
		this.listItemId = listItemId;
		this.name = name;
		this.completed = completed;
	}

	public Integer getId() {
		return id;
	}

	public int getListItemId() {
		return listItemId;
	}

	public String getName() {
		return name;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setListItemId(int listItemId) {
		this.listItemId = listItemId;
	}
}
