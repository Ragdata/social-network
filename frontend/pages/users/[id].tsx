import styles from './style.module.scss'
import TopNavbar from "../../components/topNavbar/topNavbar";
import React, {FormEvent, useEffect, useState} from "react";
import CreateProfile from "../../components/createProfile/createProfile";
import axios from "axios";

interface ProfileData {
  id: string;
  name: string;
  surname: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  mainPhoto?: string;
  city: string;
  userId: string;
}

export default function () {
  const [viewTA, setViewTA] = useState(false)
  const [newPost, setNewPost] = useState('')
  const [createProfile, setCreateProfile] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData | null>()


  const openText = () => {
    setViewTA(true)
  }
  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(newPost)
    setNewPost('')
    setViewTA(false)
  }

  const getProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:3001/profiles/getProfile', {
        headers: {
          id: `${localStorage.getItem('userId')}`
        }
      })
      console.log(response.data)
      setProfileData(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setCreateProfile(true)
    getProfiles()
  }, [])

  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();
  const items = [
    <img style={{width: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" onDragStart={handleDragStart} />,
    <img style={{width: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" onDragStart={handleDragStart} />,
    <img style={{width: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" onDragStart={handleDragStart} />,
    <img style={{width: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" onDragStart={handleDragStart} />,
    <img style={{width: '200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" onDragStart={handleDragStart} />,
  ];

  const breakPoints = [
    {width: 1500, itemToShow: 4}
  ]

  return (
    <div className={styles.main}>
      <TopNavbar />
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.main_info}>
            <div className={styles.avatar}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" alt="avatar"/>
            </div>
            <div className={styles.info}>
              <p style={{fontWeight: 'bold', fontSize: '24px'}}><span>{profileData?.name}</span> <span>{profileData?.surname}</span></p>
              <hr style={{border: '1px solid #3AAFA9', width: '90%'}}/>
              <p><span style={{color: 'grey', marginRight: '20px'}}>???????? ????????????????: </span><span>{profileData?.dateOfBirth}</span></p>
              <p><span style={{color: 'grey', marginRight: '20px'}}>??????????: </span>??. <span>{profileData?.city}</span></p>
              <p><span style={{color: 'grey', marginRight: '20px'}}>?????????? ????????????????: </span><span>{profileData?.phone}</span></p>
            </div>
          </div>
          <div className={styles.userPhotos}>
            <div className={styles.blockPhotos}>
              <p style={{marginLeft: '30px'}}>My photos</p>
              <div className={styles.photos}>
                <div className={styles.photo}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" alt=""/></div>
                <div className={styles.photo}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" alt=""/></div>
                <div className={styles.photo}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" alt=""/></div>
                <div className={styles.photo}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" alt=""/></div>
                <div className={styles.photo}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjZqlgD7-Wv8Fi6437F8MBQqYvts9-nZY8_tTjURyaRoiHTYQHCsDspNsHkrWRrNXmWw&usqp=CAU" alt=""/></div>
              </div>
            </div>
          </div>
          <div className={styles.blockPost}>
            <div className={styles.userPost}>
              <div className={styles.addPost}>
                <form onSubmit={(e) => addNewPost(e)}>
                  <div className={styles.formInp}>
                    {viewTA
                      ? <textarea
                        autoFocus
                        placeholder='Add a new post...'
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                      />
                      : <input
                        type="text"
                        placeholder='Add a new post...'
                        onClick={() => openText()}
                      />
                    }
                  </div>
                  <div className={styles.formBtn}>
                    <label style={{fontSize: '12px'}} htmlFor="check">Add to news?</label>
                    <input id="check" type="checkbox"/>
                    <input className={styles.btn} type="submit" value="Add"/>
                  </div>

                </form>
              </div>
              <div className={styles.post}>
                {/*<AliceCarousel mouseTracking items={items} autoWidth='200px'/>*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        createProfile
        ? <CreateProfile />
        : <></>
      }
    </div>
  )
}