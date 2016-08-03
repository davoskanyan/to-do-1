package toDo;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
public class ListItem {

	private Integer id;
	private String name;

	public ListItem() {

	}

	public ListItem(Integer id, String name) {
		this.id = id;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}
}
