import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    healthPreferences: '',
    notifications: false,
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">User Profile Management</h2>
        {!editMode ? (
          <div>
            <p><strong>Name:</strong> {profile.name || 'Not set'}</p>
            <p><strong>Email:</strong> {profile.email || 'Not set'}</p>
            <p><strong>Health Preferences:</strong> {profile.healthPreferences || 'Not set'}</p>
            <p><strong>Notifications:</strong> {profile.notifications ? 'Enabled' : 'Disabled'}</p>
            <button className="btn btn-primary w-100 mt-3" onClick={() => setEditMode(true)}>Edit Profile</button>
          </div>
        ) : (
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={profile.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={profile.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input type="password" className="form-control" name="password" value={profile.password} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Health Preferences</label>
              <input type="text" className="form-control" name="healthPreferences" value={profile.healthPreferences} onChange={handleChange} />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="notifications" name="notifications" checked={profile.notifications} onChange={handleChange} />
              <label className="form-check-label" htmlFor="notifications">Enable Notifications</label>
            </div>
            <button type="button" className="btn btn-success w-100" onClick={handleSave}>Save Changes</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
