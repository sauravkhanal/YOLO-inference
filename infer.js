export default async function infer(formData){

    const url = "http://127.0.0.1:8000/infer"

    try{
        const response = await fetch(
            url,{
                method: 'POST',
                body: formData,
            }
        );

        if (response.ok) {
            return await response.json(); // return prediction result
        }
        else {
            console.error('Error: ', response.statusText);
        }

    }catch (error) {
        console.error('Error: ', error.message);
    }
}