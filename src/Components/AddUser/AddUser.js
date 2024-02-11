import React from "react";

const AddUser = () => {
  const imgbbKey = "18a8d0f77a7a7c4643e1e64714b6915a";

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;

    const imageFile = form.image.files[0];
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const address = form.address.value;
    const city = form.city.value;
    const name = form.name.value;

    const formData = new FormData();
    formData.append("image", imageFile);

    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const userDetails = {
            image: imgData.data.url,
            firstName,
            lastName,
            address: { address, city },
            company: { name },
          };
          // console.log(userDetails);

          fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails),
          })
            .then((res) => res.json())
            .then(console.log);
            document.getElementById('add-user').close()
        } else {
          console.error("Image upload failed:", imgData.error);
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="add-user" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New User</h3>
          <p className="py-2">For add new user please fillu below form:</p>
          <div>
            <form onSubmit={handleAddUser}>
              <div className="form-control   ">
                <label className="label">
                  <span className="label-text">Avatar</span>
                </label>
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered "
                  required
                  accept="image/*"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter user First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter user Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter user email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter user Address"
                  className="input input-bordered"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Enter user City"
                  className="input input-bordered mt-3"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter user Company Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="mt-5 w-1/2 m-auto">
                <input
                  className="btn btn-primary w-full"
                  value="Submit"
                  type="submit"
                />
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddUser;
