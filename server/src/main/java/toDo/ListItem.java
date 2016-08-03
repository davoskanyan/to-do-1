package toDo;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
public class ListItem {

	private int id;
	private String name;

	public ListItem(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

}
