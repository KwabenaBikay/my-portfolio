"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
  // 1. Extract data securely from the incoming form object
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const honey = formData.get("honey"); // Anti-bot honeypot field

  // 2. Silently fail if a bot filled out the hidden honeypot field
  if (honey) {
    return { success: false, message: "Spam detected." };
  }

  // 3. Validation safeguard
  if (!name || !email || !message) {
    return { success: false, message: "Please fill out all required fields." };
  }

  // 4. FORMSPREE CONFIGURATION
  // Example: if your endpoint is https://formspree.io/f/xoqpkyzz, your ID is "xoqpkyzz"
  const FORMSPREE_FORM_ID = "xnjrdlzy";

  try {
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || "New Portfolio Contact Message",
        message,
      }),
    });

    // If Formspree accepts the payload successfully
    if (response.ok) {
      return {
        success: true,
        message: "Message dispatched! Thank you for reaching out."
      };
    }

    // Handle structural/account configuration errors returned by Formspree
    const errorBody = await response.json();
    return {
      success: false,
      message: errorBody.error || "Formspree rejected submission. Check configuration."
    };

  } catch (error) {
    // Catch standard network drops or timeout failures
    return {
      success: false,
      message: "Transmission error. Please try again later."
    };
  }
}