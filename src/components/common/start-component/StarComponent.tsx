import React from "react";

interface StarComponentProps {
  rating: any;
  setRating?: any;
  fontSize?: string;
}

const StarComponent = ({ rating, setRating, fontSize }: StarComponentProps) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={star + index}
            className="start"
            style={{
              cursor: "pointer",
              color: rating >= star ? "#ECB800" : "#D9D9D9",
              fontSize: `${fontSize}`,
            }}
            onClick={() => {
              setRating?.(star);
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
};

export default StarComponent;
