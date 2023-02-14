import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    const [user, setUser] = useState({});
    const initialFormState = { ...user };
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: initialFormState });

    const onSubmit = (data) => {
        setUser(data);
        console.log(user);
    };

    return (
        <>
            <div className="container text-left">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-4 col-sm-12 col">
                        <div className="LoginSignBg">
                            <div className="text-center">
                                <h3>Sign Up</h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control bg-white"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    <span className="error_validation ml-3">
                                        {errors.name?.type === "required" &&
                                            "This field is required."}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date_of_brith"> DOB</label>
                                    <div>
                                        <Controller
                                            control={control}
                                            name="date_of_brith"
                                            defaultValue={null}
                                            render={(props) => {
                                                return (
                                                    <ReactDatePicker
                                                        {...props.field}
                                                        onChange={props.field.onChange}
                                                        selected={props.field.value}
                                                        className="date-input form-control"
                                                        yearDropdownItemNumber={100}
                                                        scrollableYearDropdown={true}
                                                        showYearDropdown
                                                        showMonthDropdown
                                                        autoComplete="off"
                                                        placeholderText="MM-DD-YYYY"
                                                        maxDate={new Date()}
                                                    />
                                                );
                                            }}
                                            rules={{ required: true }}
                                        />
                                        <span className="error_validation ml-3">
                                            {errors.date_of_brith?.type === "required" &&
                                                "This field is required."}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control bg-white"
                                        name="email"
                                        id="email"
                                        {...register("email", {
                                            required: true,
                                            pattern: {
                                                value:
                                                    /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|test|testing)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/,
                                                message: "Please enter a valid business email!",
                                            },
                                        })}
                                    />
                                    <span className="error_validation -ml-3">
                                        {errors.email?.type === "required" &&
                                            "This field is required."}
                                        {errors.email?.message}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <div className="row ms-1">
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="row">
                                                <input
                                                    type="radio"
                                                    className="col-sm-1 ms-1"
                                                    name="gender"
                                                    id="gender"
                                                    autoComplete="off"
                                                    value="M"
                                                    {...register("gender", { required: true })}
                                                />{" "}
                                                <p className="col-sm-4 pt-3 ">Male</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="row">
                                                <input
                                                    type="radio"
                                                    className="col-sm-1 ms-1"
                                                    name="gender"
                                                    id="gender"
                                                    value="F"
                                                    {...register("gender", { required: true })}
                                                />{" "}
                                                <p className="col-sm-2 pt-3">Female</p>
                                            </div>
                                        </div>
                                        <span className="error_validation ml-3">
                                            {errors.gender?.type === "required" &&
                                                "This field is required."}
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <div className="PhoneInput">
                                        <Controller
                                            control={control}
                                            name="mobile"
                                            rules={{
                                                validate: (value) => isValidPhoneNumber(value),
                                                required: true,
                                                minLength: 8,
                                            }}
                                            render={({ field: { onChange, value } }) => (
                                                <PhoneInput
                                                    international
                                                    value={value}
                                                    onChange={onChange}
                                                    autoComplete="off"
                                                    id="mobile"
                                                    defaultCountry="IN"
                                                    className="form-control d-flex"
                                                />
                                            )}
                                        />
                                    </div>
                                    <span className="error_validation ml-3">
                                        {errors.mobile?.type === "required" &&
                                            "This field is required."}
                                    </span>
                                    <span className="error_validation ml-3">
                                        {errors.mobile?.type === "validate" &&
                                            "Please enter valid phone number."}
                                    </span>
                                    <span className="error_validation ml-3">
                                        {errors.mobile?.type === "maxLength" &&
                                            "Phone number max length is 13"}
                                    </span>
                                    <span className="error_validation ml-3">
                                        {errors.mobile?.type === "minLength" &&
                                            "Phone number min length is 8"}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        value="SUBMIT"
                                        className="btn btn-primary btn-block submit-button mt-2"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
