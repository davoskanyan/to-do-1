package toDo.util;

import toDo.ListItem;
import toDo.TaskItem;

import java.util.List;

/**
 * @author David.Voskanyan on 8/2/2016.
 */
public class ToDoHelper {
	public static String listsToJson(List<ListItem> lists) {
		StringBuilder jsonString = new StringBuilder("");
		jsonString.append("[");
		boolean isFirst = true;
		for (ListItem listItem : lists) {
			if (!isFirst) {
				jsonString.append(",");
			}
			jsonString.append("{");
			jsonString.append("\"id\":").append(listItem.getId()).append(",");
			jsonString.append("\"name\":").append("\"").append(listItem.getName()).append("\"");
			jsonString.append("}");

			isFirst = false;
		}
		jsonString.append("]");

		return jsonString.toString();
	}

	public static String tasksToJson(List<TaskItem> tasks) {
		StringBuilder jsonString = new StringBuilder("");

		jsonString.append("[");
		boolean isFirst = true;
		for (TaskItem taskItem : tasks) {
			if (!isFirst) {
				jsonString.append(",");
			}
			jsonString.append("{");
			jsonString.append("\"id\":").append(taskItem.getId()).append(",");
			jsonString.append("\"name\":").append("\"").append(taskItem.getName()).append("\"").append(",");
			jsonString.append("\"completed\":").append(taskItem.isCompleted());
			jsonString.append("}");

			isFirst = false;
		}
		jsonString.append("]");

		return jsonString.toString();
	}
}
