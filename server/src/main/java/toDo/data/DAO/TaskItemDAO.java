package toDo.data.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;
import toDo.TaskItem;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Davoskanyan on 8/20/2016.
 */
@Repository
public class TaskItemDAO {

	@Autowired
	private NamedParameterJdbcOperations namedParameterJdbcOperations;

	private int userId = 1;

	public List<TaskItem> getTaskItems(int listItemId) {
		String getListItemsQuery = "EXEC getTaskItems @UserId=:userId, @ListItemId=:listItemId";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("userId", userId);
		paramMap.put("listItemId", listItemId);

		return namedParameterJdbcOperations.query(getListItemsQuery, paramMap, new BeanPropertyRowMapper<>(TaskItem.class));
	}

	public void editTaskItem(TaskItem taskItem) {
		String editTaskItemQuery = "EXEC editTaskItem @Id= :id, @UserId= :userId, @ListItemId= :listItemId, @Name= :name, @Completed= :isCompleted";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("id", taskItem.getId());
		paramMap.put("userId", userId);
		paramMap.put("listItemId", taskItem.getListItemId());
		paramMap.put("name", taskItem.getName());
		paramMap.put("isCompleted", taskItem.isCompleted());

		namedParameterJdbcOperations.update(editTaskItemQuery, paramMap);
	}

	public int saveTaskItem(TaskItem newTaskItem) {
		String saveTaskItemQuery = "EXEC saveTaskItem @UserId= :userId, @ListItemId= :listItemId, @Name= :name, @Completed= :isCompleted";


		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("userId", userId);
		paramMap.put("listItemId", newTaskItem.getListItemId());
		paramMap.put("name", newTaskItem.getName());
		paramMap.put("isCompleted", newTaskItem.isCompleted());

		return namedParameterJdbcOperations.queryForObject(saveTaskItemQuery, paramMap, Integer.class);
	}

	public void deleteTaskItem(int listItemId, int taskItemId) {
		String deleteTaskItemQuery = "EXEC deleteTaskItem @Id=:id, @UserId=:userId, @ListItemId=:listItemId";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("id", taskItemId);
		paramMap.put("userId", userId);
		paramMap.put("listItemId", listItemId);

		namedParameterJdbcOperations.update(deleteTaskItemQuery, paramMap);
	}
}
