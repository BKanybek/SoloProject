import React, {useEffect} from 'react';
import { Table, Button } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getUsers } from '../../Actions/UserActions';

const ListPage = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    const pushToDetail = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div className="container mt-5">
      <div className="mb-5">
        <Link to="/create">
          <Button>Add new user</Button>
        </Link>
      </div>
      <Table striped bordered hover size="xl">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => pushToDetail(item.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{index + 1}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.birth_date}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
    );
};

export default ListPage;