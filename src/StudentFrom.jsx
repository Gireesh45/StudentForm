import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
import "./StudentForm.css";
import { addStudent } from "./redux/studentSlice";

const StudentForm = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  console.log(students, 'students')
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const encryptedPassword = CryptoJS.AES.encrypt(data.password, "secret_key").toString();
    const newStudent = { ...data, password: encryptedPassword };

    dispatch(addStudent(newStudent));
    reset();
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label>ID</label>
          <input type="text" {...register("id", { required: "ID is required" })} />
          {errors.id && <p className="error">{errors.id.message}</p>}
        </div>

        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register("name", { required: "Name is required" })} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="text" 
            {...register("phoneNumber", { 
              required: "Phone number is required", 
              pattern: { 
                value: /^[0-9]{10}$/, 
                message: "Phone number must be exactly 10 digits" 
              } 
            })} 
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              {...register("password", { required: "Password is required" })} 
            />
            <input 
              type="checkbox" 
              id="showPassword" 
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="showPassword">Show Password</label>
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label>Status</label>
          <select {...register("status")}>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="active">Active</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
