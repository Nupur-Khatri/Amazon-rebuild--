import { CheckCircleIcon } from "@heroicons/react/solid";
import Header from "../components/Header";

function success() {
    return (
        <div className="bg-gray-100 h-screen">
          <Header />

          <main className="max-w-screen-lg mx-auto">
            <div>
                <div>
                    <CheckCircleIcon className="color-green-500 h-10" />
                </div>
            </div>
          </main>
        </div>
    )
}

export default success