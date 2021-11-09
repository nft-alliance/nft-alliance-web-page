import React from "react";
import LoadingSpinner from "./LoadingSpinner";

export function Button({
  children,
  onClick,
  loading,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}): React.ReactElement {
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        className={loading ? 'loading': ''}
        onClick={onClick}
      >
        {!loading ? (
          <div className="children-wrapper">{children}</div>
        ) : (
          <LoadingSpinner />
        )}
      </button>
      <style jsx>{`
        button {
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          border: 1px solid var(--text-main-color);
          font-size: 16px;
          padding: 8px 16px;
          transition: background-color 0.35s ease-out, color 0.35s ease-out;
        }

        button:hover {
          background: var(--page-background-color);
          color: var(--text-main-color);
        }

        @media all and (min-width: 501px) and (max-width: 600px) {
          button {
            font-size: 14px;
          }
        }

        

        button.loading {
          display: flex;
          justify-content: center;
          text-align: center;
        }
        button.loading div {
          display: inline-block;
        }

       
      `}</style>
    </React.Fragment>
  );
}
