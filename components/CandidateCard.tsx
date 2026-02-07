
import React from 'react';
import { Candidate } from '../types';

interface Props {
  candidate: Candidate;
  onUpdateNotes: (notes: string) => void;
}

const CandidateCard: React.FC<Props> = ({ candidate, onUpdateNotes }) => {
  const Row = ({ label, value, isGray }: { label: string; value: string | number; isGray?: boolean }) => (
    <div className="flex border-b border-black w-full">
      {/* السؤال على اليمين */}
      <div className={`w-1/2 p-2 text-center text-[13px] font-black flex items-center justify-center min-h-[35px] border-l border-black ${isGray ? 'bg-[#f2f2f2] text-black print-row-bg' : 'bg-[var(--card-bg-solid)]'}`}>
        {label} :
      </div>
      {/* المعلومات على اليسار */}
      <div className="w-1/2 p-2 text-center text-[13px] font-bold bg-white text-black flex items-center justify-center min-h-[35px]">
        {value || "-"}
      </div>
    </div>
  );

  return (
    <div className="candidate-card mx-auto shadow-2xl transition-all duration-500 overflow-hidden bg-white text-black">
      {/* Header */}
      <div className="bg-[#4472c4] text-white py-3 px-4 text-center font-black text-xl border-x border-t border-black print-header">
        نموذج الاتصال المبدئي
      </div>

      <div className="border-x border-black border-t">
        <Row label="الاسم الكامل" value={candidate.fullName} />
        <Row label="رقم الجوال" value={candidate.phone} isGray />

        <div className="flex border-b border-black w-full bg-[#dde4f1] print-row-bg">
          <div className="w-full py-1.5 text-center text-[12px] font-black italic text-gray-700">
            مصدر CV: نعم
          </div>
        </div>

        <Row label="الوظيفة المراد التقدم عليها" value={candidate.jobAppliedFor} />
        <Row label="عدد سنوات الخبرة" value={candidate.yearsOfExperience} isGray />
        <Row label="الجنسية" value={candidate.nationality} />
        <Row label="حالة الإقامة" value={candidate.residencyStatus} isGray />
        <Row label="العمر" value={candidate.age} />
        <Row label="الحالة الاجتماعية" value={candidate.socialStatus} isGray />
        <Row label="على رأس العمل" value={candidate.currentlyEmployed} />
        <Row label="متفرغ للعمل" value={candidate.fullTimeAvailability} isGray />
        <Row label="الحالة المهنية بالأحوال" value={candidate.militaryStatus} />
        <Row label="آخر راتب" value={candidate.lastSalary} isGray />
        <Row label="مستوى اللغة الإنجليزية" value={candidate.englishLevel} />
        <Row label="يتوفر مواصلات" value={candidate.hasTransportation} isGray />
        <Row label="مستعد لمتطلبات العمل" value={candidate.willingToWorkReqs} />
        <Row label="معلومات السكن" value={candidate.housingInfo} isGray />
        <Row label="يوجد كرت صحي" value={candidate.hasHealthCard} />
        <Row label="مستعد للمقابلة في جدة" value={candidate.willingToInterviewInJeddah} isGray />

        {/* Action Section */}
        <div className="bg-[#cfd5ea] border-b border-black py-2 text-center font-black text-[14px] text-black print-row-bg">
          تم الرد على الاتصال : ( نعم / لا )
        </div>

        <div className="flex border-b border-black bg-white text-black">
          <div className="w-1/2 p-2 text-center text-[13px] font-black bg-[#f2f2f2] flex items-center justify-center min-h-[35px] border-l border-black print-row-bg">
            الترشيح لعمل مقابلة :
          </div>
          <div className="w-1/2 p-2 text-center text-[13px] font-bold min-h-[35px] bg-white flex items-center justify-center">
            0
          </div>
        </div>

        <div className="flex border-b border-black bg-white text-black">
          <div className="w-1/2 p-2 text-center text-[13px] font-black bg-[#f2f2f2] flex items-center justify-center min-h-[35px] border-l border-black print-row-bg">
            موعد المقابلة الشخصية :
          </div>
          <div className="w-1/2 p-2 text-center text-[13px] font-bold min-h-[35px] bg-white flex items-center justify-center">
            0
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#4472c4] text-white py-2 text-center text-[14px] font-black border-b border-black print-header">
          الموظف: فيصل السني
        </div>
      </div>

      {/* Digital Notes (Hidden in Print) */}
      <div className="mt-8 no-print glass-card p-6 rounded-3xl border border-white/10 shadow-inner">
        <label className="block text-xs font-black mb-3 uppercase tracking-widest opacity-60">ملاحظات إضافية (سجل رقمي):</label>
        <textarea
          className="w-full h-32 p-4 text-sm bg-black/5 dark:bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-blue-500/20 outline-none resize-none font-bold transition-all"
          placeholder="اكتب انطباعك أو أي ملاحظات هامة هنا..."
          value={candidate.interviewerNotes || ''}
          onChange={(e) => onUpdateNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CandidateCard;
