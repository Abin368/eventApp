import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignUp
        appearance={{
          elements: {
            card: "shadow-lg rounded-2xl border border-gray-200 p-6",
            headerTitle: "text-2xl font-bold text-center",
            formButtonPrimary: "bg-black hover:bg-gray-800",
          },
        }}
      />
    </div>
  );
}
