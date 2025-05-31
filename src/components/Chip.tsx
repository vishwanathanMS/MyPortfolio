interface ChipProps {
  label: string;
  percentage?: number;
}

const Chip: React.FC<ChipProps> = ({ label, percentage = 0 }) => {
  return (
    <div className="skill-chip">
      <span className="chip-label">{label}</span>
      {percentage > 0 && <span className="chip-percentage">{percentage}%</span>}
    </div>
  );
};

export default Chip;