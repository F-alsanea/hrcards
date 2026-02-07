
import React from 'react';
import { Candidate } from '../types';

interface Props {
  candidate: Candidate;
  onUpdateNotes: (notes: string) => void;
}

const CandidateCard: React.FC<Props> = ({ candidate, onUpdateNotes }) => {
  const Row = ({ label, value, isGray }: { label: string; value: string | number; isGray?: boolean }) => (
    <div className="flex border-b border-black dark:border-white/20 print:border-black w-full">
      {/* السؤال على اليمين */}
      <div className={`w-1/2 p-2 text-center text-[13px] font-black flex items-center justify-center min-h-[35px] border-l border-black dark:border-white/20 print:border-black ${isGray ? 'bg-black/5 dark:bg-white/10 print:bg-[#f2f2f2] print:text-black' : 'bg-transparent'}`}>
        {label} :
      </div>
      {/* المعلومات على اليسار */}
      <div className="w-1/2 p-2 text-center text-[13px] font-bold bg-white/5 dark:bg-black/20 print:bg-white print:text-black flex items-center justify-center min-h-[35px]">
        {value || "-"}
      </div>
    </div>
  );

  return (
    <div className="candidate-card mx-auto shadow-2xl transition-all duration-500 overflow-hidden glass-card rounded-3xl border border-white/10 print:bg-white print:text-black print:rounded-none print:border-black">
      {/* Header */}
      <div className="bg-[#4472c4] text-white py-4 px-4 text-center font-black text-xl border-b border-black dark:border-white/20 print:border-black print-header">
        نموذج الاتصال المبدئي
      </div>

      <div className="border-x border-black dark:border-white/10 print:border-black print:border-x">
        <Row label="الاسم الكامل" value={candidate.fullName} />
        <Row label="رقم الجوال" value={candidate.phone} isGray />

        <div className="flex border-b border-black dark:border-white/10 print:border-black w-full bg-[#dde4f1] dark:bg-blue-900/40 print:bg-[#dde4f1] print-row-bg">
          <div className="w-full py-1.5 text-center text-[11px] font-black italic text-blue-700 dark:text-blue-300 print:text-gray-700">
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
        <div className="bg-[#cfd5ea] dark:bg-indigo-900/40 border-b border-black dark:border-white/10 print:border-black py-2 text-center font-black text-[13px] print:bg-[#cfd5ea] print:text-black print-row-bg">
          تم الرد على الاتصال : ( نعم / لا )
        </div>

        <div className="flex border-b border-black dark:border-white/10 print:border-black">
          <div className="w-1/2 p-2 text-center text-[13px] font-black bg-black/5 dark:bg-white/10 flex items-center justify-center min-h-[35px] border-l border-black dark:border-white/10 print:border-black print:bg-[#f2f2f2] print:text-black print-row-bg">
            الترشيح لعمل مقابلة :
          </div>
          <div className="w-1/2 p-2 text-center text-[13px] font-bold min-h-[35px] flex items-center justify-center">
            0
          </div>
        </div>

        <div className="flex border-b border-black dark:border-white/10 print:border-black">
          <div className="w-1/2 p-2 text-center text-[13px] font-black bg-black/5 dark:bg-white/10 flex items-center justify-center min-h-[35px] border-l border-black dark:border-white/10 print:border-black print:bg-[#f2f2f2] print:text-black print-row-bg">
            موعد المقابلة الشخصية :
          </div>
          <div className="w-1/2 p-2 text-center text-[13px] font-bold min-h-[35px] flex items-center justify-center">
            0
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#4472c4] text-white py-3 text-center text-[14px] font-black border-b border-black dark:border-white/20 print:border-black print-header">
          الموظف: فيصل السني
        </div>
      </div>

      {/* Digital Notes (Hidden in Print) */}
      <div className="mt-8 no-print p-6 border-t border-white/5">
        <label className="block text-[10px] font-black mb-3 uppercase tracking-[0.2em] opacity-40">ملاحظات إضافية (سجل رقمي):</label>
        <textarea
          className="w-full h-32 p-4 text-sm bg-black/10 dark:bg-white/5 border border-white/10 rounded-2xl focus:ring-4 focus:ring-blue-500/20 outline-none resize-none font-bold transition-all"
          placeholder="اكتب انطباعك أو أي ملاحظات هامة هنا..."
          value={candidate.interviewerNotes || ''}
          onChange={(e) => onUpdateNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CandidateCard;
