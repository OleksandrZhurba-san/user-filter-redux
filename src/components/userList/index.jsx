import { connect } from "react-redux";
import UserItem from "../userItem";
function UserList({ users, filterValue }) {
  return (
    <div>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((user) => {
          return <UserItem key={user.id} {...user} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.usersList,
  filterValue: state.filterValue,
});

export default connect(mapStateToProps)(UserList);
