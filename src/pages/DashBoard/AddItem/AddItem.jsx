import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import { ErrorMessage } from "@hookform/error-message"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./addItem.css";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const apiKey = import.meta.env.VITE_IMAGE_UPLOADED_TOKEN;
  const axios = useAxiosSecure()
  // console.log(imageToken)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageHostinUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.imageFile[0]);

    fetch(imageHostinUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        const imageURL = imageResponse?.data?.image?.url;
        data.image = imageURL;
        const {name, recipe, image, category, price} = data; 
        const menuItems = {name,recipe,image, category, price: parseFloat(price)};
        console.log({menuItems})
        axios.post(`/menu`, menuItems)
        .then(data => {
            if(data.data.insertedId){
                reset()
                Swal.fire({
                    title:  "Added Menu Item Successfully",
                    icon: 'success'
                })
            }
        })
        .catch((error)=> {
            Swal.fire({
                icon: error,
                title: `${error.message}`
            })
        })
         
      });
  };

  return (
    <section className="addItem_wrapper section-py">
      <div className="addItem_section_title">
        <SectionTitle
          mainHeading="ADD AN ITEM"
          subHeading="What's new?"
          color="#000"
        ></SectionTitle>
      </div>
      <div className="addItemForm_wrapper flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="recipe_form_wrapper">
          {/* recipe name field */}
          <div className="Recipe_name">
            <div className="recipe_name_label">
              <label htmlFor="recipe name">
                Recipe Name <span className="text-error">*</span>:
              </label>
            </div>
            <div className="recipe_name_input_field">
              <input
                type="text"
                placeholder="Type Recipe Name"
                className="input input-bordered w-full"
                {...register("name", { maxLength: 120, required: true })}
              />
            </div>
          </div>
          {errors.name && <p className="text-[red]">{errors.name?.message}</p>}
          
          
          {/* recipe box wrapper inder the category and price feild */}
          <div className="recepe_box flex justify-between">
            {/* Category field */}
            <div className="category_wrapper basis-[48%]">
              <div className="category_label">
                <label htmlFor="recipe name">
                  Category<span className="text-error">*</span>:
                </label>
              </div>
              <div className="category_input_field">
                <select
                  name="category"
                  id="category_section"
                  className="select select-bordered w-full py-3"
                  {...register("category", { required: true })}
                >
                  <option>Popular</option>
                  <option>Dessert</option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soup</option>
                </select>
              </div>
            </div>
            {/* recipe price field */}
            <div className="Recipe_price basis-[48%]">
              <div className="recipe_price_label">
                <label htmlFor="recipe name">
                  Price<span className="text-error">*</span>:
                </label>
              </div>
              <div className="recipe_price_input_field">
                <input
                  type="number"
                  placeholder="Type Price"
                  className="input input-bordered w-full"
                  {...register("price", { required: true })}
                />
              </div>
            </div>
          </div>
          {errors.category || errors.price ? <p className="text-[red]">{errors.category?.message} {errors.price?.message}</p> : ""}

          {/*  Recipe Details* field */}
          <div className="Recipe_details">
            <div className="recipe_details_label">
              <label htmlFor="recipe name">
                Recipe Details<span className="text-error">*</span>:
              </label>
            </div>
            <div className="recipe_details_input_field">
              <textarea
                rows="10"
                cols="50"
                type="number"
                placeholder="Type Recipe Details"
                className=" input-bordered w-full p-4 rounded-md  border-2 border-[#eee] border-spacing-1"
                {...register(
                  "recipe",
                  { maxLength: 1000, minLength: 5 },
                  { required: true }
                )}
              />
            </div>
          </div>

          {errors.recipe && <p className="text-[red]">{errors.recipe?.message}</p>}





          {/* recipe file upload field */}
          <div className="recipe_file_upload-feild">
            <label className="form-control w-[300px]">
              <input
                {...register("imageFile", { required: true })}
                type="file"
                className="file-input file-input-bordered "
              />
            </label>
          </div>

          {errors.imageFile && <p className="text-[red]">{errors.imageFile?.message}</p>}








          {/* recipe add to item btn */}
          <div className="recipe_add_item_btn flex justify-center items-center">
            <input type="submit" value="Add Item" className="rounded-md" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z"
                fill="white"
              />
              <path
                d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z"
                fill="white"
              />
            </svg>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
