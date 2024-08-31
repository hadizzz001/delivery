"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 31480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8697);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40248);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96583);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const AddPost = ()=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [inputs, setInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [firstSelectValue, setFirstSelectValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [value1, setValue1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [imgs, setImgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        ""
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInputs((prevState)=>({
                ...prevState,
                category: "" + firstSelectValue,
                img: imgs
            }));
    }, [
        firstSelectValue,
        imgs
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (e.target.category.value == "0") {
            alert("Please select a category");
        } else if (imgs.includes("")) {
            alert("Please select item image");
        } else {
            setActive(true);
            axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.post("/api/posts", inputs).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err.response.data);
            }).finally(()=>{
                setInputs({});
                setModalOpen(false);
                setActive(false);
                window.location.replace("/dashboard");
            });
        }
    };
    const handleChange = (e)=>{
        if (e.target.name == "price") {
            // Allow digits and one dot
            const numericValue = e.target.value.replace(/[^0-9.]/g, "");
            // Ensure only one dot is allowed
            const validNumericValue = numericValue.includes(".") ? numericValue.split(".").slice(0, 2).join(".") : numericValue;
            setValue1(validNumericValue);
        }
        const name = e.target.name;
        const value = e.target.value;
        setInputs((prevState)=>({
                ...prevState,
                [name]: value,
                img: localStorage.getItem("sharedValue")
            }));
    };
    const handleFirstSelectChange = (event)=>{
        const selectedValue = event.target.value;
        setFirstSelectValue(selectedValue);
    };
    const handleImgChange = (url)=>{
        if (url) {
            setImgs(url);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setModalOpen(true),
                className: "text-white p-3 cursor-pointer",
                style: {
                    background: "#c01907"
                },
                children: "Add New Item"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>push("/reservation"),
                className: "text-white p-3 cursor-pointer",
                style: {
                    marginLeft: "1em",
                    background: "#c01907"
                },
                children: "View Orders"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                modalOpen: modalOpen,
                setModalOpen: setModalOpen,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "w-full mt-3",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Title",
                            name: "title",
                            className: "w-full p-2",
                            value: inputs.title || "",
                            onChange: handleChange,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            placeholder: "Description",
                            name: "description",
                            className: "w-full p-2 my-3",
                            value: inputs.description || "",
                            onChange: handleChange,
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Price",
                            name: "price",
                            className: "w-full p-2 my-3",
                            value: value1,
                            onChange: handleChange,
                            required: true
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            name: "category",
                            value: firstSelectValue,
                            onChange: handleFirstSelectChange,
                            style: {
                                width: "100%",
                                height: "40px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "0",
                                    selected: true,
                                    children: "--Choose Category--"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Food",
                                    children: "Food"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Drink",
                                    children: "Drink"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Donishka Mart",
                                    children: "Donishka Mart"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropzone__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            HandleImagesChange: handleImgChange,
                            className: "mt-10 border border-neutral-200 p-16"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            style: {
                                color: "red"
                            },
                            children: "Note: images should be no more 1MB and size of 1200 * 720 px"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n.uploadcare--widget__button_type_open { \n    background-color: #c01907 !important;\n}\n"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                            dangerouslySetInnerHTML: {
                                __html: "   \n\n.uploadcare--button_size_big { \n    background-color: #c01907 !important;\n}\n"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "px-5 py-2 mt-3",
                            style: {
                                background: "#c01907"
                            },
                            disabled: active,
                            children: "Submit"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddPost);


/***/ }),

/***/ 96583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47447);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploadcare_react_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46145);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const ImageForm = ({ defaultValue, HandleImagesChange })=>{
    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [imgs, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            pt: "1.5em"
        },
        children: load && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uploadcare_react_widget__WEBPACK_IMPORTED_MODULE_3__.W, {
            clearable: true,
            multiple: true,
            imagesOnly: true,
            // values={imgs}
            onChange: ()=>{
                // setProduct({
                //     ...product,
                //     images: imgs
                // })
                HandleImagesChange(imgs);
            },
            onFileSelect: async (e)=>{
                let filess = e && e.files();
                if (!filess) return;
                const immg = [];
                for(let i = 0; i < filess.length; i++){
                    filess[i].done((file)=>{
                        if (file?.cdnUrl) {
                            immg.push(`${file.cdnUrl}`);
                        }
                    });
                }
                setImages(immg);
            },
            publicKey: "a5408386975df04a846a"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageForm);


/***/ }),

/***/ 8697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Modal = ({ children, modalOpen, setModalOpen })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-black/50 fixed inset-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-end bg-slate-300  p-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setModalOpen(false),
                            className: "text-2xl mb-3",
                            children: "\xd7"
                        }),
                        children
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ 44923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_PostList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./app/components/Modal.jsx
var Modal = __webpack_require__(8697);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./app/components/Dropzone.tsx
var Dropzone = __webpack_require__(96583);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
;// CONCATENATED MODULE: ./app/components/Post.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Post = ({ post })=>{
    const router = (0,navigation.useRouter)();
    const [openModalEdit, setOpenModalEdit] = (0,react_experimental_.useState)(false);
    const [postToEdit, setPostToEdit] = (0,react_experimental_.useState)(post);
    const [active, setActive] = (0,react_experimental_.useState)(false);
    const [active1, setActive1] = (0,react_experimental_.useState)(false);
    const [firstSelectValue, setFirstSelectValue] = (0,react_experimental_.useState)("");
    const [value1, setValue1] = (0,react_experimental_.useState)("");
    const [imgs, setImgs] = (0,react_experimental_.useState)([
        ""
    ]);
    const [openModalDelete, setOpenModalDelete] = (0,react_experimental_.useState)(false);
    const handleEditSubmit = (e)=>{
        e.preventDefault();
        setActive(true);
        axios/* default */.Z.patch(`/api/posts/${post.id}`, postToEdit).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setOpenModalEdit(false);
            setActive(false);
            window.location.replace("/dashboard");
        });
    };
    const handleChange = (e)=>{
        if (e.target.name == "price") {
            // Allow digits and one dot
            const numericValue = e.target.value.replace(/[^0-9.]/g, "");
            // Ensure only one dot is allowed
            const validNumericValue = numericValue.includes(".") ? numericValue.split(".").slice(0, 2).join(".") : numericValue;
            setValue1(validNumericValue);
        }
        const name = e.target.name;
        const value = e.target.value;
        setPostToEdit((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const handleDeletePost = (id)=>{
        axios/* default */.Z.delete(`/api/posts/${id}`).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        }).finally(()=>{
            setOpenModalEdit(false);
            window.location.replace("/dashboard");
        });
    };
    const handleImgChange = (url)=>{
        if (url) {
            setImgs(url);
        }
    };
    const handleFirstSelectChange = (event)=>{
        const selectedValue = event.target.value;
        setFirstSelectValue(selectedValue);
        setActive1(true);
    };
    (0,react_experimental_.useEffect)(()=>{
        if (firstSelectValue) {
            setPostToEdit((prevState)=>({
                    ...prevState,
                    category: "" + firstSelectValue
                }));
        }
    }, [
        firstSelectValue
    ]);
    (0,react_experimental_.useEffect)(()=>{
        if (!imgs.includes("")) {
            setPostToEdit((prevState)=>({
                    ...prevState,
                    img: imgs
                }));
        }
    }, [
        imgs
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-200 p-3 min-h-full min-w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: "text-2xl font-bold",
                children: [
                    "Title : ",
                    post.title
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                children: [
                    "Category : ",
                    post.category
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("b", {
                children: [
                    "Price($) : ",
                    post.price
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    width: "150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                },
                children: post.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: post.img[0],
                width: 50
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "text-blue-700 mr-3",
                        onClick: ()=>setOpenModalEdit(true),
                        children: "Edit"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Modal/* default */.Z, {
                        modalOpen: openModalEdit,
                        setModalOpen: setOpenModalEdit,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: "w-full mt-3",
                            onSubmit: handleEditSubmit,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Title",
                                    name: "title",
                                    className: "w-full p-2",
                                    value: postToEdit.title || "",
                                    onChange: handleChange,
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    placeholder: "Description",
                                    name: "description",
                                    className: "w-full p-2 my-3",
                                    value: postToEdit.description || "",
                                    onChange: handleChange,
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Price",
                                    name: "price",
                                    className: "w-full p-2 my-3",
                                    value: postToEdit.price || value1,
                                    onChange: handleChange,
                                    required: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    name: "category",
                                    value: firstSelectValue,
                                    onChange: handleFirstSelectChange,
                                    style: {
                                        width: "100%",
                                        height: "40px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "0",
                                            selected: true,
                                            children: "--Choose Category--"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "Food",
                                            children: "Food"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "Drink",
                                            children: "Drink"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "Donishka Mart",
                                            children: "Donishka Mart"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Dropzone/* default */.Z, {
                                    HandleImagesChange: handleImgChange,
                                    className: "mt-10 border border-neutral-200 p-16"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    style: {
                                        color: "red"
                                    },
                                    children: "Note: images should be no more 1MB and size of 1200 * 720 px"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "px-5 py-2 mt-3",
                                    style: {
                                        background: "#c01907"
                                    },
                                    disabled: active,
                                    children: "Submit"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setOpenModalDelete(true),
                        className: "text-red-700 mr-3",
                        children: "Delete"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal/* default */.Z, {
                        modalOpen: openModalDelete,
                        setModalOpen: setOpenModalDelete,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl pb-3",
                                children: "Are you sure, You want to delete this post?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>handleDeletePost(post.id),
                                        className: "text-blue-700 font-bold mr-5",
                                        children: "YES"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>setOpenModalDelete(false),
                                        className: "text-red-700 font-bold mr-5",
                                        children: "No"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }, post.id);
};
/* harmony default export */ const components_Post = (Post);

;// CONCATENATED MODULE: ./app/components/PostList.jsx


const PostList = ({ posts })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4 place-items-start",
        children: posts?.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Post, {
                post: post
            }, post.id))
    });
};
/* harmony default export */ const components_PostList = (PostList);


/***/ })

};
;