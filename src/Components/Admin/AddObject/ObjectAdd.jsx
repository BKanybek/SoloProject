import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import* as yup from "yup"
import { createUser } from '../../Actions/UserActions';
import { Formik } from "formik";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap"

const ObjectAdd = () => {
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

      const dispatch = useDispatch()
      const navigate = useNavigate()
      const handleClick = (data) => {
          dispatch(createUser(data, toast))
          navigate('/')
      }

    return (
        <div className="container mt-5 mb-5">
      <div className="mb-5">
        <Link to="/">
          <Button className="btn-success">Main page</Button>
        </Link>
      </div>
      <Formik
        validationSchema={schema}
        onSubmit={(data) => handleClick(data)}
        initialValues={{
          first_name: "",
          last_name: "",
          birth_date: "2021-12-31",
          gender: "",
          job: "",
          biography: "",
          is_active: false,
        }}
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
                isValid={touched.first_name && !errors.first_name}
                isInvalid={!!errors.first_name}
                value={values.first_name}
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
                isValid={touched.last_name && !errors.last_name}
                isInvalid={!!errors.last_name}
                value={values.last_name}
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
                isValid={touched.birth_date && !errors.birth_date}
                isInvalid={!!errors.birth_date}
                value={values.birth_date}
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
                isValid={touched.gender && !errors.gender}
                isInvalid={!!errors.gender}
                value={values.gender}
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
                isValid={touched.job && !errors.job}
                isInvalid={!!errors.job}
                value={values.job}
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
                isValid={touched.biography && !errors.biography}
                isInvalid={!!errors.biography}
                value={values.biography}
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
            <Button type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </div>
    );
};

export default ObjectAdd;