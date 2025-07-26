import { useEffect, useState } from "react";
import perfil from "/genericPhotoIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { formatServerDate } from "../../helpers/helpers";
import {
  cleanError,
  cleanUserProfile,
  setUserEdit,
} from "../../redux/slices/userSlice";
import { CameraIcon } from "@heroicons/react/16/solid";
import DeactiveUserModal from "../../components/user/DeactiveUserModal";
import { fetchUploadProfilePicture } from "../../redux/thunks/userThunks";
import { Slide, toast, ToastContainer } from "react-toastify";

const UserProfileView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userProfile = useSelector((state: RootState) => state.user.userProfile);
  const loading = useSelector((state: RootState) => state.user.loading);

  const userDateOfBirth = userProfile?.dateOfBirth ?? "";
  const [isActive, setIsActive] = useState<boolean>(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const imageUrl =
  //   previewImage ||
  //   (user ? `http://localhost:4000/api/${user.profilePicture}` : perfil);

  const imgProfile = (path: string | null) => {
    if (path === null) {
      return perfil;
    } else {
      return `${import.meta.env.VITE_API_URL}/${path}`;
    }
  };

  const onBack = () => {
    navigate(-1);
    dispatch(cleanUserProfile());
    dispatch(cleanError());
  };

  const onEdit = () => {
    if (!userProfile) {
      return;
    }
    dispatch(setUserEdit(userProfile));
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const onUpload = async () => {
    if (!selectedFile) {
      toast.error("Debes seleccionar una imagen", {
        autoClose: 5000,
        theme: "colored",
        transition: Slide,
      });

      return;
    }
    if (!userProfile) {
      return;
    }

    const resultAction = await dispatch(
      fetchUploadProfilePicture({ id: userProfile?.id, file: selectedFile })
    );
    

    if (fetchUploadProfilePicture.fulfilled.match(resultAction)) {
      setPreviewImage(resultAction.payload);
      toast.success("Imagen subida con éxito", {
        transition: Slide,
      });
    } 
    
    
    else {
    
      toast.error("No se pudo actualizar el usuario", {
        transition: Slide,
        theme: "colored"
      });
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      {loading ? (
        <div>Cargando .... </div>
      ) : (
        <div className="bg-gradient-to-tr from-green-400 via-green-600 to-violet-300 flex flex-col p-5 gap-5 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-3xl text-white font-semibold">
              {`${userProfile?.name} ${userProfile?.lastName}`}
            </h2>
          </div>
          <nav className="bg-white px-5 text-green-700 text-sm space-x-4 rounded-xl flex justify-between items-center">
            <div>
              <button
                className={`${
                  isActive
                    ? "font-bold text-blue-700 border-b-4 border-b-blue-500"
                    : ""
                } py-4 px-1 sm:px-4`}
                onClick={() => setIsActive(true)}
              >
                General
              </button>
              <button
                className={`${
                  !isActive
                    ? "font-bold text-blue-700 border-b-4 border-b-blue-500"
                    : ""
                } py-4 px-1 sm:px-4`}
                onClick={() => setIsActive(false)}
              >
                Seguridad
              </button>
            </div>
            <button onClick={onBack} className="text-black font-semibold">
              Atrás
            </button>
          </nav>
          <div className="flex flex-col sm:flex-row justify-between sm:gap-5">
            <div className="sm:w-1/2 md:w-1/3 flex flex-col justify-start gap-5">
              <div className=" bg-white w-full h-72 rounded-xl flex justify-center items-center">
                <div className="w-40 h-40 sm:w-44 sm:h-44 lg:w-60 lg:h-60 rounded-ful relative">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 lg:w-60 lg:h-60 rounded-full overflow-hidden">
                    <img
                      src={
                        userProfile
                          ? previewImage ||
                            imgProfile(userProfile?.profilePicture)
                          : perfil
                      }
                      alt="Imagen Perfíl"
                      className="object-cover w-full h-full flex justify-center items-center"
                    />
                    <button
                      className="absolute z-50 bottom-0 right-0"
                      onClick={() =>
                        document.getElementById("fileInput")?.click()
                      }
                      disabled={!userProfile?.active}
                    >
                      <CameraIcon className="h-12 md:h-16 text-gray-500" />
                    </button>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={onFileChange}
                    />
                  </div>
                </div>
              </div>
              <button
                className={`px-6 py-2 rounded-md shadow-lg ${
                  userProfile?.active
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                disabled={!userProfile?.active}
                onClick={onUpload}
              >
                Subir Imagen
              </button>
              <div className=" bg-white rounded-xl p-5">
                <p className="text-gray-400">Estado</p>
                <p className="flex justify-start items-center gap-1">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      userProfile?.active === true
                        ? "bg-green-400"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {userProfile?.active === true ? "Activo" : "No Activo"}
                </p>
              </div>
              <div></div>
            </div>
            <div className="sm:w-1/2 md:w-2/3 space-y-5">
              {isActive ? (
                <div className=" rounded-xl bg-white p-5">
                  <h2 className="font-bold text-green-700">
                    Información de Contacto
                  </h2>
                  <hr className="mb-3 border-gray-400" />
                  <p className="text-gray-400">Nombre</p>
                  <p className="mb-3">{userProfile?.name}</p>
                  <p className="text-gray-400">Apellido</p>
                  <p className="mb-3">{userProfile?.lastName}</p>
                  <p className="text-gray-400">Identificación</p>
                  <p className="mb-3">
                    {userProfile?.idType}: {userProfile?.userId}
                  </p>
                  <p className="text-gray-400">Teléfono</p>
                  <p className="mb-3">{userProfile?.phoneNumber}</p>
                  <p className="text-gray-400">Dirección</p>
                  <p className="mb-3">{userProfile?.address}</p>
                  <p className="text-gray-400">Correo Electrónico</p>
                  <p className="mb-3">{userProfile?.email}</p>
                  <p className="text-gray-400">Fecha de Nacimiento</p>
                  <p className="mb-3">{formatServerDate(userDateOfBirth)}</p>

                  <Link
                    to={userProfile?.active ? "/new-user" : "#"}
                    className={`px-6 py-1 bg-gradient-to-b rounded-md font-semibold ${
                      userProfile?.active
                        ? "text-black hover:from-sky-700 from-yellow-400 to-yellow-500  hover:to-sky-800 hover:text-white shadow-lg "
                        : "from-gray-300 to-gray-300  text-gray-700 cursor-default"
                    }`}
                    onClick={onEdit}
                  >
                    Editar Perfil
                  </Link>
                </div>
              ) : (
                <div className=" rounded-xl bg-white p-5">
                  <h2 className="font-bold text-green-700">Seguridad</h2>
                  <hr className="mb-3 border-gray-400" />
                  <p className="text-gray-400">Cargo</p>
                  <p className="mb-3">{userProfile?.jobTitle}</p>
                  <p className="text-gray-400">Cargo</p>
                  <p className="mb-3">{userProfile?.jobTitle}</p>
                  <p className="text-gray-400">rol</p>
                  <p className="mb-3">{userProfile?.role}</p>
                  <p className="text-gray-400">Usuario</p>
                  <p className="mb-3">{userProfile?.user}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={
                        userProfile?.active
                          ? `/update-passowrd/${userProfile?.id}`
                          : "#"
                      }
                      className={`text-sm font-medium bg-gradient-to-b px-2 py-1 rounded-md   ${
                        userProfile?.active
                          ? "text-black hover:from-sky-700 from-yellow-400 to-yellow-500  hover:to-sky-800 hover:text-white shadow-lg "
                          : "from-gray-300 to-gray-300  text-gray-700 cursor-default"
                      }`}
                    >
                      Cambiar Contraseña
                    </Link>
                    <button
                      className={`text-sm font-medium bg-gradient-to-b  text-white px-2 py-1 rounded-md  shadow  ${
                        userProfile?.active === true
                          ? "from-gray-600 to-gray-700 hover:from-black hover:to-black"
                          : " from-green-600 to-green-700 hover:from-teal-600 hover:to-teal-700"
                      }`}
                      onClick={() => setIsModalOpen(true)}
                    >
                      {userProfile?.active === true
                        ? "Desactivar Usuario"
                        : "Activar Usuario"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <DeactiveUserModal setIsModalOpen={setIsModalOpen} />}
      <ToastContainer />
    </>
  );
};
export default UserProfileView;
