import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HealthDataEntry = () => {
  const [currentPage, setCurrentPage] = useState('view');
  const [showPopup, setShowPopup] = useState(true);
  const [fitnessTarget, setFitnessTarget] = useState('');
  const [calorieLimit, setCalorieLimit] = useState('');

  const fitnessOptions = ['Lose Weight', 'Maintain Weight', 'Gain Muscle'];

  const handlePopupSubmit = () => {
    if (fitnessTarget.trim() !== '' && calorieLimit.trim() !== '') {
      setShowPopup(false);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
      {showPopup && (
        <div className="position-fixed top-50 start-50 translate-middle p-4 bg-light shadow rounded" style={{ width: '80%', maxWidth: '400px', zIndex: 1050 }}>
          <h4 className="text-center mb-3">Set Your Personal Health Goals</h4>
          
          <label className="form-label">Fitness Target</label>
          <select className="form-select mb-3" value={fitnessTarget} onChange={(e) => setFitnessTarget(e.target.value)}>
            <option value="">Select a fitness goal</option>
            {fitnessOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
          
          <label className="form-label">Calorie Limit (per day)</label>
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter calorie limit (e.g., 2000)"
            value={calorieLimit}
            onChange={(e) => setCalorieLimit(e.target.value)}
          />
          
          <button className="btn btn-primary w-100" onClick={handlePopupSubmit}>Set Goals</button>
        </div>
      )}
      {!showPopup && (
        <div className="w-80">
          <h1 className="text-center mb-4">Health Data Entry and Tracking</h1>

          {currentPage === 'edit' ? (
            <form>
              <div className="mb-3">
                <label htmlFor="meals" className="form-label">Daily Meals</label>
                <input type="text" className="form-control" id="meals" name="meals" />
              </div>
              <div className="mb-3">
                <label htmlFor="exercise" className="form-label">Exercise Routines</label>
                <input type="text" className="form-control" id="exercise" name="exercise" />
              </div>
              <div className="mb-3">
                <label htmlFor="medications" className="form-label">Medications</label>
                <input type="text" className="form-control" id="medications" name="medications" />
              </div>
              <div className="mb-3">
                <label htmlFor="medicalHistory" className="form-label">Medical History</label>
                <input type="text" className="form-control" id="medicalHistory" name="medicalHistory" />
              </div>
              <div className="mb-3">
                <label htmlFor="goals" className="form-label">Personal Health Goals</label>
                <p><strong>Fitness Target:</strong> {fitnessTarget || 'Not set'}</p>
                <p><strong>Calorie Limit:</strong> {calorieLimit || 'Not set'} kcal/day</p>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={() => setCurrentPage('view')}>Save Data</button>
                <button type="button" className="btn btn-secondary" onClick={() => setCurrentPage('view')}>Cancel</button>
              </div>
            </form>
          ) : (
            <div>
              <div className="mb-3">
                <h5>Daily Meals</h5>
                <p>No data entered.</p>
              </div>
              <div className="mb-3">
                <h5>Exercise Routines</h5>
                <p>No data entered.</p>
              </div>
              <div className="mb-3">
                <h5>Medications</h5>
                <p>No data entered.</p>
              </div>
              <div className="mb-3">
                <h5>Medical History</h5>
                <p>No data entered.</p>
              </div>
              <div className="mb-3">
                <h5>Personal Health Goals</h5>
                <p><strong>Fitness Target:</strong> {fitnessTarget || 'Not set'}</p>
                <p><strong>Calorie Limit:</strong> {calorieLimit || 'Not set'} kcal/day</p>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={() => setCurrentPage('edit')}>Edit Data</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthDataEntry;