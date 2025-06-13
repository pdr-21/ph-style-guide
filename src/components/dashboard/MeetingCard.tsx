import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Monitor, MapPin } from 'lucide-react';
import { getAgentImageByIndex } from '../../lib/agentImages';

interface MeetingCardProps {
  id: string;
  type: 'online' | 'onsite';
  title: string;
  date: string;
  time: string;
  participants: Array<{
    id: string;
    name: string;
    initials: string;
    imageIndex?: number;
  }>;
  additionalParticipants?: number;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  id,
  type,
  title,
  date,
  time,
  participants,
  additionalParticipants = 0
}) => {
  const TypeIcon = type === 'online' ? Monitor : MapPin;

  return (
    <Card className="bg-white rounded-xl border border-n-100 p-4 hover:border-n-200 hover:shadow-sm transition-all duration-200">
      {/* Date */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-center">
          <div className="text-xs font-poppins font-normal text-n-300 uppercase tracking-wide">
            {date.split(' ')[0]} {/* Month */}
          </div>
          <div className="text-lg font-poppins font-medium text-n-500">
            {date.split(' ')[1]} {/* Day */}
          </div>
        </div>
        
        {/* Meeting Type Icon */}
        <div className="flex items-center space-x-1 text-n-300">
          <TypeIcon className="w-4 h-4" />
          <span className="text-xs font-poppins font-normal capitalize">
            {type} interview
          </span>
        </div>
      </div>

      {/* Meeting Title */}
      <h3 className="text-sm font-poppins font-medium text-n-500 mb-2">
        {title}
      </h3>

      {/* Time */}
      <div className="text-xs font-poppins font-normal text-n-300 mb-4">
        {time}
      </div>

      {/* Participants */}
      <div className="flex items-center space-x-2 mb-4">
        {participants.slice(0, 3).map((participant, index) => (
          <div
            key={participant.id}
            className="w-6 h-6 rounded-full bg-n-100 flex items-center justify-center overflow-hidden"
          >
            {participant.imageIndex !== undefined ? (
              <img
                src={getAgentImageByIndex(participant.imageIndex)}
                alt={participant.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs font-poppins font-medium text-n-400">
                {participant.initials}
              </span>
            )}
          </div>
        ))}
        
        {additionalParticipants > 0 && (
          <div className="w-6 h-6 rounded-full bg-n-100 flex items-center justify-center">
            <span className="text-xs font-poppins font-medium text-n-400">
              +{additionalParticipants}
            </span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 text-xs font-poppins font-medium"
        >
          Reschedule
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 text-xs font-poppins font-medium"
        >
          Send Message
        </Button>
      </div>
    </Card>
  );
};

export default MeetingCard;