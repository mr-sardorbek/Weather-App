import { LoaderIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
      <div className="flex flex-col items-center justify-center gap-6 py-10">
        <LoaderIcon className="h-12 w-12 animate-spin text-white" />

        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">
            Loading weather...
          </h2>

          <p className="mt-2 text-sm text-white/70">
            Please wait a moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
