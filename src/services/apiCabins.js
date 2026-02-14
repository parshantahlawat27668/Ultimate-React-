import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from('cabins')
    .select('*');
  if (error) {
    throw new Error("Cabins could not loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if (error) {
    throw new Error("Cabins could not loaded");
  }
  return data

}


export async function createEditCabin(newCabin, id) {
  const hasImagepath = newCabin.image?.startsWith?.( supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  const imagePath = hasImagepath
  ? newCabin.image
  : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // 1. create cabin


  // FOR CREATE
  if (!id)
    query = query
      .insert([
        {
          ...newCabin,
          image: imagePath
        }
      ])

// FOR EDIT
  if (id) query =  query
    .update({
      ...newCabin,
      image: imagePath
    })
    .eq("id", id);

  const { data, error } = await query
    .select()
    .single();


  if (error) {
    console.log(error);
    throw new Error("Cabins could not created");
  }

  if(hasImagepath) return data;

  // 2. upload image

  const { error: storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. delete the cabin if there was an error uploading image

  if (storageError) {
    await supabase
      .from('cabins')
      .delete()
      .eq('id', data.id)

    throw new Error("Cabin Image could not be uploaded and the cabin was not created");
  }

  return data
}