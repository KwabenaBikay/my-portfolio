"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
  // Extract the data from the form
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const honey = formData.get("honey"); // The hidden anti-bot field

  // 1. Basic Security/Bot Check
  if (honey) {
    return { success: false, message: "Spam detected." };
  }

  // 2. Validation
  if (!name || !email || !message) {
    return { success: false, message: "Please fill out all required fields." };
  }

  try {
    // Simulate a network delay so you can see the loading state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Return the success state which triggers the UI change
    return {
      success: true,
      message: "Message sent successfully!"
    };

  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again later."
    };
  }
}