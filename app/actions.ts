"use server";

import { z } from "zod";

// 1. INPUT VALIDATION & SANITIZATION SCHEMA
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  subject: z.string().min(5, "Subject is too short").max(100).trim(),
  message: z.string().min(10, "Message is too short").max(1000).trim(),
  honey: z.string().optional(),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  // Extract data from the form
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    honey: formData.get("honey"),
  };

  // 2. HONEYPOT SPAM PROTECTION
  if (rawData.honey) {
    return { success: false, message: "Spam detected." }; 
  }

  // 3. VALIDATE INPUTS
  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    // This tells TypeScript "Get the first issue, or default to a generic message"
    const firstIssue = result.error.issues[0];
    return { success: false, message: firstIssue?.message || "Invalid inputs provided." };
  }

  // 4. PROCESS DATA (Simulation)
  console.log("Secure Data Received:", result.data);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Message sent successfully!" };
}