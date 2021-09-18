import "./CandidateItem.css";

function CandidateItem({ name, email, candidate, selected, selectCandidate }) {
    return (
        <div className={"candidate-item " + (selected ? 'active bg-primary' : '')} onClick={() => selectCandidate(candidate)}>
            <div className="row">
                <div className="col-3">
                    <img src="./default-user.jpg" alt="" />
                </div>
                <div className="col-9">
                    <strong>{name}</strong>
                    <small>{email}</small>
                </div>
            </div>
        </div>
    );
}

export default CandidateItem;