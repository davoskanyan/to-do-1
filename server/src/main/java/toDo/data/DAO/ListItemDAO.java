package toDo.data.DAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.stereotype.Repository;
import toDo.ListItem;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Davoskanyan on 8/20/2016.
 */
@Repository
public class ListItemDAO {

	@Autowired
	private NamedParameterJdbcOperations namedParameterJdbcOperations;

	private int userId = 1;

	public List<ListItem> getListItems() {
		String getListItemsQuery = "EXEC getListItems @UserId=:userId";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("userId", userId);

		return namedParameterJdbcOperations.query(getListItemsQuery, paramMap, new BeanPropertyRowMapper<>(ListItem.class));
	}

	public void editListItem(ListItem changedListItem) {
		String editListItemQuery = "EXEC editListItem @Id=:id, @UserId=:userId, @Name=:name";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("id", changedListItem.getId());
		paramMap.put("userId", userId);
		paramMap.put("name", changedListItem.getName());

		namedParameterJdbcOperations.update(editListItemQuery, paramMap);
	}

	public int saveListItem(ListItem newListItem) {
		String saveListItemQuery = "EXEC saveListItem @UserId=:userId, @Name=:name";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("userId", userId);
		paramMap.put("name", newListItem.getName());

		return namedParameterJdbcOperations.queryForObject(saveListItemQuery, paramMap, Integer.class);
	}

	public void deleteListItem(int listItemId) {
		String deleteListItemQuery = "EXEC deleteListItem @Id=:id, @UserId=:userId";

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("id", listItemId);
		paramMap.put("userId", userId);

		namedParameterJdbcOperations.update(deleteListItemQuery, paramMap);
	}
}
