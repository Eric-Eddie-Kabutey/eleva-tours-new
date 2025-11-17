import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Team } from "@/lib/teams-data";

export function TeamCard({ team }: { team: Team }) {
  return (
    <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden text-center group">
      <div className="relative">
        <Image
          src={team.imageUrl}
          alt={`Photo of ${team.name}`}
          width={400}
          height={400}
          className="w-full aspect-square object-cover object-top"
        />
        {/* The "+" button that appears on hover */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={team.profileUrl}
            className="h-14 w-14 rounded-full bg-brand-green text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            aria-label={`View profile of ${team.name}`}
          >
            <Plus size={28} />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-title text-xl font-bold text-brand-dark">{team.name}</h3>
        <p className="text-brand-green font-semibold mt-1">{team.title}</p>
      </div>
    </div>
  );
}