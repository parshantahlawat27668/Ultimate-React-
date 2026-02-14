import supabase from "./supabase"

export async function getSettings(){
    const {data, error} = await supabase
    .from("settings")
    .select("*")
    .single();

    if(error){
        console.log(error);
        throw new Error("Settings could not be loaded");
    }
    return data;
}




export  async function updateSetting(newSettings){

const { data, error, } = await supabase
  .from('settings')
  .update(newSettings)
  .eq("id",1)
  .select();


  if(error){
    throw new Error("Error while updating settings");
  }

  return data
}