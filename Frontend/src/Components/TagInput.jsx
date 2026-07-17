import { useState } from "react";
import { X } from "lucide-react";

const TagInput = ({ tags, setTags }) => {

  const [input, setInput] = useState("");

  const addTag = () => {

    const tag = input.trim().toLowerCase();

    if (!tag) return;

    if (tags.includes(tag)) {

      setInput("");

      return;

    }

    if (tags.length >= 10) {

      alert("Maximum 10 tags allowed.");

      return;

    }

    setTags([...tags, tag]);

    setInput("");

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter" || e.key === ",") {

      e.preventDefault();

      addTag();

    }

  };

  const removeTag = (index) => {

    setTags(tags.filter((_, i) => i !== index));

  };

  return (

    <div>

      <label className="block text-white font-medium mb-3">

        Tags

      </label>

      <div className="bg-[#111827] border border-gray-700 rounded-xl p-4">

        <div className="flex flex-wrap gap-3 mb-3">

          {tags.map((tag, index) => (

            <div
              key={index}
              className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full"
            >

              <span>

                {tag}

              </span>

              <button
                type="button"
                onClick={() => removeTag(index)}
              >

                <X size={15} />

              </button>

            </div>

          ))}

        </div>

        <input
          type="text"
          value={input}
          placeholder="Type a tag and press Enter..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none text-white placeholder-gray-500"
        />

      </div>

      <p className="text-gray-500 text-sm mt-2">

        Press Enter or comma to add a tag.

      </p>

    </div>

  );

};

export default TagInput;