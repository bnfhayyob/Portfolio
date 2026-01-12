import {redirect} from  'next/navigation'

// CONTACT FORM HANDLER
// This function processes the contact form submission
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");

  if (!message) {
    return {
      error: "Invalid message",
    };
  }

  // Log the form data (in production, you would send this to your email service)
  console.log("Contact Form Submission:", {
    name,
    email: SenderEmail,
    message
  });

  // Redirect to home page after submission
  return redirect('/')
};
