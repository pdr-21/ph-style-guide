import React from 'react';
import MeetingCard from './MeetingCard';

const UpcomingMeetingsSection: React.FC = () => {
  // Sample meeting data - this will be replaced with real data later
  const thisWeekMeetings = [
    {
      id: '1',
      type: 'online' as const,
      title: 'HR Interview with Jack',
      date: 'Jun 18',
      time: '12:30 PM - 13:30 PM EST',
      participants: [
        { id: '1', name: 'Sarah Johnson', initials: 'SJ', imageIndex: 0 },
        { id: '2', name: 'Mike Chen', initials: 'MC', imageIndex: 1 },
      ],
      additionalParticipants: 4
    },
    {
      id: '2',
      type: 'onsite' as const,
      title: 'HR Interview with Jack',
      date: 'Jun 18',
      time: '12:30 PM - 13:30 PM EST',
      participants: [
        { id: '1', name: 'Sarah Johnson', initials: 'SJ', imageIndex: 0 },
        { id: '2', name: 'Mike Chen', initials: 'MC', imageIndex: 1 },
      ],
      additionalParticipants: 4
    },
    {
      id: '3',
      type: 'onsite' as const,
      title: 'HR Interview with Jack',
      date: 'Jun 18',
      time: '12:30 PM - 13:30 PM EST',
      participants: [
        { id: '1', name: 'Sarah Johnson', initials: 'SJ', imageIndex: 0 },
        { id: '2', name: 'Mike Chen', initials: 'MC', imageIndex: 1 },
      ],
      additionalParticipants: 4
    }
  ];

  const nextWeekMeetings = [
    {
      id: '4',
      type: 'online' as const,
      title: 'HR Interview with Jack',
      date: 'Jun 18',
      time: '12:30 PM - 13:30 PM EST',
      participants: [
        { id: '1', name: 'Sarah Johnson', initials: 'SJ', imageIndex: 0 },
        { id: '2', name: 'Mike Chen', initials: 'MC', imageIndex: 1 },
      ],
      additionalParticipants: 4
    },
    {
      id: '5',
      type: 'online' as const,
      title: 'HR Interview with Jack',
      date: 'Jun 18',
      time: '12:30 PM - 13:30 PM EST',
      participants: [
        { id: '1', name: 'Sarah Johnson', initials: 'SJ', imageIndex: 0 },
        { id: '2', name: 'Mike Chen', initials: 'MC', imageIndex: 1 },
      ],
      additionalParticipants: 4
    }
  ];

  return (
    <div className="bg-gr-25 rounded-xl p-6">
      {/* Header */}
      <h2 className="text-lg font-poppins font-semibold text-n-500 mb-6">
        Upcoming meetings
      </h2>

      {/* This Week Section */}
      <div className="mb-8">
        <h3 className="text-sm font-poppins font-medium text-n-400 uppercase tracking-wide mb-4">
          THIS WEEK
        </h3>
        <div className="space-y-4">
          {thisWeekMeetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              id={meeting.id}
              type={meeting.type}
              title={meeting.title}
              date={meeting.date}
              time={meeting.time}
              participants={meeting.participants}
              additionalParticipants={meeting.additionalParticipants}
            />
          ))}
        </div>
      </div>

      {/* Next Week Section */}
      <div>
        <h3 className="text-sm font-poppins font-medium text-n-400 uppercase tracking-wide mb-4">
          NEXT WEEK
        </h3>
        <div className="space-y-4">
          {nextWeekMeetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              id={meeting.id}
              type={meeting.type}
              title={meeting.title}
              date={meeting.date}
              time={meeting.time}
              participants={meeting.participants}
              additionalParticipants={meeting.additionalParticipants}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetingsSection;