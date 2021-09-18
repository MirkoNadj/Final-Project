import "./CandidateInfoItem.css";

export const CandidateInfoItem = ({ className, label, value }) => {
    return (
        <div className={`candidate-info-item ${className}`}>
            <div className="candidate-info-label">
                {label}
            </div>
            <div className="candidate-info-value">
                {value}
            </div>
        </div>
    );
}