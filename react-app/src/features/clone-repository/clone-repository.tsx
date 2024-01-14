export const CloneRepository: React.FC = () => {
  return (
    <div>
      <h1>Clone repository</h1>
      <div>
        <input
          type="text"
          placeholder="Public repository url"
          id="repository-url"
        />
        <button id="clone-repository-button">Clone</button>
      </div>
    </div>
  );
};