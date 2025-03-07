import React, { useState } from "react";
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { FormField, Loader, Card } from "../components";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
};

export default CreatePost;
