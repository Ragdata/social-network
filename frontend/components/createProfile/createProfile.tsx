import React, {useState} from 'react';
import styles from './style.module.scss'
import axios from "axios";
import { Formik } from 'formik';

const CreateProfile = () => {

  const createProfile = async (values: any) => {
    console.log('values',values)
    try {
      // console.log(values.dateOfBirth)
      const response = await axios.post('http://localhost:3001/profiles/createProfile', {
        name: values.name,
        surname: values.surname,
        gender: values.gender,
        phone: values.phone,
        dataOfBirth: values.dateOfBirth,
        city: values.city,
        mainPhoto: values.photo,
        userId: localStorage.getItem('userId'),
      })
      console.log('response', response.data)
      localStorage.setItem('profileId', response.data.id)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 style={{color: 'teal', textAlign: 'center'}}>Create you profile!</h1>

        <Formik
          initialValues={{
            name: '',
            surname: '',
            gender: '',
            dateOfBirth: '',
            phone: '',
            city: '',
            photo: ''
          }}
          validate={values => {
            // const errors = {};
            // if (!values.email) {
            //   errors.email = 'Required';
            // } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //   errors.email = 'Invalid email address';
            // }
            // return errors;
          }
          }
          onSubmit={(values, { setSubmitting }) => {
            // console.log(values)
            // createProfile(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
            }) => (
              <form onSubmit={(e) => {
                e.preventDefault()
                createProfile(values);
              }}>
                <input
                  className={styles.input}
                  name="name"
                  type="text"
                  placeholder="Your name..."
                  required
                  value={values.name}
                  onChange={handleChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  name="surname"
                  placeholder="Your surname..."
                  required
                  value={values.surname}
                  onChange={handleChange}
                />
                <div className={styles.gender}>
                  <span style={{color: 'grey'}}>Choice your gender: </span><br/>
                  <div className={styles.gen}>
                    <div>
                      <input
                        type="radio"
                        name='gender'
                        id='man'
                        value='man'
                        style={{marginRight: '10px'}}
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="man">Man</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name='gender'
                        id='woman'
                        value='woman'
                        style={{marginRight: '10px'}}
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="woman">Woman</label>
                    </div>
                  </div>
                </div>
                <input
                  className={styles.input}
                  type="date"
                  name="dateOfBirth"
                  placeholder="Your date of birthday..."
                  // required
                  value={values.dateOfBirth}
                  data-date-format="YYYY MM DDDD"
                  // onChange={e => {
                  //   const regionRu = new Intl.DateTimeFormat('ru', { timeZone: 'UTC' });
                  //   setDateOfBirth(regionRu.format(e.target.valueAsDate as Date))
                  //   // setFieldValue('dateOfBirth', regionRu.format(e.target.valueAsDate as Date))
                  // }}
                />
                <input
                  className={styles.input}
                  type="number"
                  name="phone"
                  placeholder="Your phone number..."
                  required
                  value={values.phone}
                  onChange={handleChange}
                />
                <input
                  className={styles.input}
                  type="text"
                  name="city"
                  placeholder="Your city..."
                  required
                  value={values.city}
                  onChange={handleChange}
                />
                <label style={{color: 'grey', marginBottom: '20px'}} htmlFor="photo">Choice your photo:</label>
                <input
                  className={styles.file}
                  id='photo'
                  name="photo"
                  type="file"
                  value={values.photo}
                  onChange={handleChange}
                />
                <button
                  className={styles.btn}
                  type='submit'
                >Create new Profile</button>
              </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateProfile;