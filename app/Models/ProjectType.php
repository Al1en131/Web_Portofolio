<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProjectType extends Model
{
    use HasFactory;

    protected $tables = 'project_types';
    protected $guarded = [];

    public function project() : HasMany {
        return $this->hasMany(Project::class);      
    }


}
