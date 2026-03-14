import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">My Dearest Babee.... ❤️</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                Ninte oppamulla oro nimishavum oru magic pole aanu enikku thonnunnathu. Ninte presence ente darkest days polum light aakkunnu. Ninte chiriyum, ninte voice um ente heart il oru beautiful melody pole aanu.
              </p>
              <p className="handwritten-line">
                Nee ente life il vannathinu shesham, ellam kurachu koodi beautiful ayi maari. Njan orikkalum ezhunelkkenda oru swapnam pole aanu nee — ente happiest place.
              </p>
              <p className="handwritten-line">
                Words kondu parayan pattathra njan ninne snehikkunnu. Endhum ninakkullathanu ente heart.
              </p>
              <div className="handwritten-signature">
                Forever yours…
                <br />
                <span className="signature-name">Your Sibii... ❤️</span>
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
