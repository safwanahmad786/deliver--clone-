import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityclient, { urlFor } from "../../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityclient
      .fetch(
        `
  *[_type == "category"]
  `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
    {categories.map((category) =>(
      <CategoryCard
      key={category._id}
        imgUrl={urlFor(category.image).width(200).url()}
        title={category.name}
      />
    ))}
     
    </ScrollView>
  );
};

export default Categories;
