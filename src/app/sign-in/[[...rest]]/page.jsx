import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn
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
