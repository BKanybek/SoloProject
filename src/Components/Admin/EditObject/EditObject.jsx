import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearUserToEdit, getUserToEdit, saveEditedUser } from '../../Actions/UserActions';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';

const EditPage = () => {
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    const params = useParams()
    const userToEdit = useSelector((state) => state.userReducer.userToEdit)
    const [editUser, setEditUser] = useState(userToEdit)

    useEffect(() => {
        dispatch(getUserToEdit(params.id))
    }, [])

    useEffect(() => {
        setEditUser(userToEdit)
    }, [userToEdit])

    const schema = yup.object().shape({
        first_name: yup
          .string()
          .min(2, "Too short")
          .max(256, "Too long")
          .required("Required"),
        last_name: yup
          .string()
          .min(2, "Too short")
          .max(256, "Too long")
          .required("Required"),
        birth_date: yup.string().required("Required"),
        gender: yup.string().required("Required"),
        job: yup
          .string()
          .min(2, "Too short")
          .max(256, "Too long")
          .required("Required"),
        biography: yup
          .string()
          .min(2, "Too short")
          .max(1024, "Too long")
          .required("Required"),
        is_active: yup.bool().required("Required"),
      });

    const handleClick = (data) => {
        dispatch(saveEditedUser(data, toast))
        dispatch(clearUserToEdit())
        navigate('/')
    }

    return (
        <div className="container mt-5 mb-5">
      <div className="mb-5">
        {/* <Link to="/"> */}
        <Button
          onClick={() => {
            dispatch(clearUserToEdit());
            navigate('/')
          }}
          className="btn-success"
        >
          Main page
        </Button>
        {/* </Link> */}
      </div>
      {editUser ? (
        <Formik
          validationSchema={schema}
          onSubmit={(data) => handleClick(data)}
          initialValues={editUser}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="first_name"
                  type="text"
                  placeholder="First name"
                  value={values.first_name}
                  isValid={touched.first_name && !errors.first_name}
                  isInvalid={!!errors.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.last_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="last_name"
                  type="text"
                  placeholder="Last name"
                  value={values.last_name}
                  isValid={touched.last_name && !errors.last_name}
                  isInvalid={!!errors.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.last_name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="birth_date"
                  type="date"
                  placeholder="Date of birthday"
                  value={values.birth_date}
                  isValid={touched.birth_date && !errors.birth_date}
                  isInvalid={!!errors.birth_date}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.birth_date}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sex</Form.Label>
                <Form.Select
                  onChange={handleChange}
                  name="gender"
                  className="me-sm-2"
                  value={values.gender}
                  isValid={touched.gender && !errors.gender}
                  isInvalid={!!errors.gender}
                >
                  <option value="">Choose...</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="job"
                  type="text"
                  placeholder="Job"
                  value={values.job}
                  isValid={touched.job && !errors.job}
                  isInvalid={!!errors.job}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.job}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Biography</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="biography"
                  as="textarea"
                  rows={3}
                  value={values.biography}
                  isValid={touched.biography && !errors.biography}
                  isInvalid={!!errors.biography}
                  
                />
                <Form.Control.Feedback type="invalid">
                  {errors.biography}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  checked={values.is_active}
                  onChange={handleChange}
                  name="is_active"
                  type="checkbox"
                  label="Is active"
                />
              </Form.Group>
              <Button type="submit">Save changes</Button>
            </Form>
          )}
        </Formik>
      ) : null}
    </div>
    );
};

export default EditPage;