import React, {useState} from 'react';
import styles from './style.module.scss'
import axios from "axios";

const CreateProfile = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [photo, setPhoto] = useState('')

  const createProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('as')
    try {
      const response = await axios.post('http://localhost:3001/profiles/createProfile', {
        name: name,
        surname: surname,
        gender: gender,
        phone: phone,
        dataOfBirth: dateOfBirth,
        city: city,
        mainPhoto: photo,
        userId: localStorage.getItem('userId'),
      })
      console.log(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h1 style={{color: 'teal', textAlign: 'center'}}>Create you profile!</h1>
        <form onSubmit={(e) => createProfile(e)}>
          <input className={styles.input} type="text" placeholder="Your name..." required value={name} onChange={e => setName(e.target.value)}/>
          <input className={styles.input} type="text" placeholder="Your surname..." required value={surname} onChange={e => setSurname(e.target.value)}/>
          <div className={styles.gender}>
            <span style={{color: 'grey'}}>Choice your gender: </span><br/>
            <div className={styles.gen}>
              <div>
                <input type="radio" name='gender' id='man' value='man' style={{marginRight: '10px'}} required onChange={e => setGender(e.target.value)}/>
                <label htmlFor="man">Man</label>
              </div>
              <div>
                <input type="radio" name='gender' id='woman' value='woman' style={{marginRight: '10px'}} required onChange={e => setGender(e.target.value)}/>
                <label htmlFor="woman">Woman</label>
              </div>
            </div>
          </div>
          <input className={styles.input} type="date" placeholder="Your date of birthday..." required value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
          <input className={styles.input} type="number" placeholder="Your phone number..." required value={phone} onChange={e => setPhone(e.target.value)}/>
          <input className={styles.input} type="text" placeholder="Your city..." required value={city} onChange={e => setCity(e.target.value)}/>
          <label style={{color: 'grey', marginBottom: '20px'}} htmlFor="photo">Choice your photo:</label>
          <input className={styles.file} id='photo' type="file" value={photo} onChange={e => setPhoto(e.target.value)}/>
          <button className={styles.btn} type='submit'>Create new Profile</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;